import { Controller, Get, Res } from '@nestjs/common';
import express from 'express';

@Controller()
export class AppController {
  @Get()
  getWelcome(@Res() res: express.Response) {
    res.send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Manager API</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          body {
            background: #0f0f1a;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Segoe UI', sans-serif;
            color: white;
            overflow: hidden;
          }

          .container {
            text-align: center;
            animation: fadeIn 1s ease-in;
          }

          .logo {
            font-size: 80px;
            animation: bounce 2s infinite;
          }

          h1 {
            font-size: 2.5rem;
            background: linear-gradient(135deg, #E0234E, #ff6b9d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 20px 0 10px;
          }

          p {
            color: #888;
            font-size: 1.1rem;
            margin-bottom: 40px;
          }

          .endpoints {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .badge {
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: bold;
            animation: pulse 2s infinite;
          }

          .green { background: #1a3a2a; color: #4ade80; border: 1px solid #4ade80; }
          .blue  { background: #1a2a3a; color: #60a5fa; border: 1px solid #60a5fa; }
          .pink  { background: #3a1a2a; color: #f472b6; border: 1px solid #f472b6; }

          .status {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: #4ade80;
            font-size: 0.9rem;
          }

          .dot {
            width: 10px;
            height: 10px;
            background: #4ade80;
            border-radius: 50%;
            animation: blink 1.5s infinite;
          }

          .particles {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: -1;
          }

          .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #E0234E;
            border-radius: 50%;
            animation: float linear infinite;
            opacity: 0.4;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(-15px); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50%       { transform: scale(1.05); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.3; }
          }

          @keyframes float {
            0%   { transform: translateY(100vh) rotate(0deg);   opacity: 0; }
            10%  { opacity: 0.4; }
            90%  { opacity: 0.4; }
            100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
          }
        </style>
      </head>
      <body>

        <div class="particles" id="particles"></div>

        <div class="container">
          <div class="logo">📋</div>
          <h1>Task Manager API</h1>
          <p>API REST com NestJS • TypeORM • MySQL • JWT</p>

          <div class="endpoints">
            <span class="badge green">✅ /users</span>
            <span class="badge blue">🔐 /auth/login</span>
            <span class="badge pink">📌 /tasks</span>
          </div>

          <div class="status">
            <div class="dot"></div>
            Servidor rodando na porta 3000
          </div>
        </div>

        <script>
          const container = document.getElementById('particles');
          for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            p.style.left = Math.random() * 100 + 'vw';
            p.style.animationDuration = (Math.random() * 10 + 8) + 's';
            p.style.animationDelay = (Math.random() * 10) + 's';
            p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
            container.appendChild(p);
          }
        </script>

      </body>
      </html>
    `);
  }
}