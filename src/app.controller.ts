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
          body { background: #0a0a14; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Segoe UI', sans-serif; color: white; overflow: hidden; }
          .particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
          .particle { position: absolute; border-radius: 50%; background: #E0234E; opacity: 0; animation: floatUp linear infinite; }
          .container { text-align: center; position: relative; z-index: 1; animation: fadeIn 1.2s ease-out; padding: 2rem; }
          .icon-wrap { width: 90px; height: 90px; border-radius: 24px; background: linear-gradient(135deg, #E0234E22, #E0234E44); border: 1px solid #E0234E55; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; animation: iconPulse 3s ease-in-out infinite; font-size: 40px; }
          h1 { font-size: 2.4rem; font-weight: 700; background: linear-gradient(135deg, #fff 40%, #E0234E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem; }
          .subtitle { color: #888; font-size: 1rem; margin-bottom: 2rem; }
          .badges { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem; }
          .badge { padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
          .b-green { background: #0d2a1a; color: #4ade80; border: 1px solid #4ade8044; }
          .b-blue  { background: #0d1a2a; color: #60a5fa; border: 1px solid #60a5fa44; }
          .b-pink  { background: #2a0d1a; color: #f472b6; border: 1px solid #f472b644; }
          .b-amber { background: #2a1a0d; color: #fbbf24; border: 1px solid #fbbf2444; }
          .divider { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, #E0234E, transparent); margin: 0 auto 2rem; }
          .author-card { display: inline-flex; align-items: center; gap: 14px; background: #ffffff08; border: 1px solid #ffffff14; border-radius: 16px; padding: 14px 20px; margin-bottom: 1.5rem; }
          .avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #E0234E, #ff6b9d); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px; color: white; }
          .author-name { font-size: 0.95rem; font-weight: 600; color: #fff; }
          .author-role { font-size: 0.78rem; color: #888; margin-top: 2px; }
          .links { display: flex; gap: 10px; justify-content: center; margin-bottom: 2rem; }
          .link-btn { display: flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; text-decoration: none; border: 1px solid; }
          .link-linkedin { background: #0a66c222; color: #60a5fa; border-color: #0a66c244; }
          .link-github   { background: #ffffff11; color: #ccc; border-color: #ffffff22; }
          .status { display: flex; align-items: center; justify-content: center; gap: 8px; color: #4ade80; font-size: 0.82rem; }
          .dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: blink 1.5s ease-in-out infinite; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes iconPulse { 0%, 100% { box-shadow: 0 0 0 0 #E0234E22; } 50% { box-shadow: 0 0 0 12px #E0234E00; } }
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
          @keyframes floatUp { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 0.35; } 90% { opacity: 0.35; } 100% { transform: translateY(-10vh) scale(1); opacity: 0; } }
        </style>
      </head>
      <body>
        <div class="particles" id="particles"></div>
        <div class="container">
          <div class="icon-wrap">📋</div>
          <h1>Task Manager API</h1>
          <p class="subtitle">NestJS &nbsp;·&nbsp; TypeORM &nbsp;·&nbsp; MySQL &nbsp;·&nbsp; JWT Auth</p>
          <div class="badges">
            <span class="badge b-green">✓ /users</span>
            <span class="badge b-blue">⚿ /auth/login</span>
            <span class="badge b-pink">◈ /tasks</span>
            <span class="badge b-amber">bcrypt + JWT</span>
          </div>
          <div class="divider"></div>
          <div class="author-card">
            <div class="avatar">WA</div>
            <div>
              <div class="author-name">Wallace Araujo</div>
              <div class="author-role">Back-end Developer</div>
            </div>
          </div>
          <div class="links">
            <a class="link-btn link-linkedin" href="https://www.linkedin.com/in/wallacearaujo27/" target="_blank">LinkedIn</a>
            <a class="link-btn link-github" href="https://github.com/wallace-stack" target="_blank">GitHub</a>
          </div>
          <div class="status">
            <div class="dot"></div>
            Servidor rodando na porta 3000
          </div>
        </div>
        <script>
          const c = document.getElementById('particles');
          for (let i = 0; i < 25; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 4 + 2;
            p.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+Math.random()*100+'vw;animation-duration:'+(Math.random()*12+8)+'s;animation-delay:'+(Math.random()*12)+'s;';
            c.appendChild(p);
          }
        </script>
      </body>
      </html>
    `);
  }
}