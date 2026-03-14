import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  // Injeta o repositório do TypeORM para manipular a tabela de usuários no banco
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Retorna todos os usuários do banco de dados
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Busca um usuário pelo ID — lança erro 404 se não encontrar
  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  // Busca um usuário pelo email — usado no login
  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  // Cria um novo usuário com a senha criptografada
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      // Criptografa a senha antes de salvar — o 10 é o número de rounds do bcrypt
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      // Cria o objeto usuário mesclando os dados recebidos com a senha criptografada
      const user = this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

      // Salva o usuário no banco e retorna o objeto criado
      return await this.usersRepository.save(user);
    } catch (error: any) {
      // Se o email já existir no banco, lança erro 409 Conflict
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email já cadastrado');
      }
      // Qualquer outro erro é relançado
      throw error;
    }
  }

  // Atualiza os dados de um usuário — só atualiza os campos enviados
  async update(id: number, attrs: Partial<CreateUserDto>): Promise<User> {
    // Busca o usuário — já lança 404 se não existir
    const user = await this.findOne(id);

    // Se uma nova senha foi enviada, criptografa antes de salvar
    if (attrs.password) {
      attrs.password = await bcrypt.hash(attrs.password, 10);
    }

    // Mescla os dados novos com os dados existentes do usuário
    Object.assign(user, attrs);

    // Salva e retorna o usuário atualizado
    return this.usersRepository.save(user);
  }

  // Remove um usuário do banco de dados pelo ID
  async remove(id: number): Promise<void> {
    // Busca o usuário — já lança 404 se não existir
    const user = await this.findOne(id);

    // Remove o usuário do banco
    await this.usersRepository.remove(user);
  }
}