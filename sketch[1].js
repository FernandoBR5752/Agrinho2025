<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrinho 2025 - Fernando</title>
    <style>
        /* Estilos Gerais */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background-image: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            position: relative;
        }
        
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.85);
            z-index: -1;
        }
        
        header {
            background: linear-gradient(135deg, #2E7D32, #4CAF50);
            color: white;
            text-align: center;
            padding: 2rem 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            position: relative;
        }
        
        h1 {
            margin: 0;
            font-size: 2.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
        }
        
        /* Quadros de Matérias-Primas */
        .materias-primas {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .quadro {
            background: white;
            border-radius: 12px;
            width: 45%;
            min-width: 300px;
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            border: 2px solid #4CAF50;
        }
        
        .quadro:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        
        .quadro img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 4px solid #4CAF50;
        }
        
        .quadro-content {
            padding: 1.5rem;
        }
        
        .quadro h3 {
            color: #2E7D32;
            margin-top: 0;
            font-size: 1.5rem;
        }
        
        /* Seção Informativa */
        .info-section {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            margin: 3rem 0;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            border: 2px solid #4CAF50;
        }
        
        .data-card {
            background: #E8F5E9;
            border-left: 5px solid #2E7D32;
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 0 8px 8px 0;
        }
        
        /* Rodapé */
        footer {
            background: #2E7D32;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
            position: relative;
        }
        
        /* Animações */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        .floating {
            animation: float 3s ease-in-out infinite;
        }
        
        .logo-agrinho {
            max-width: 150px;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <header>
        <img src="https://www.agrinho.com.br/wp-content/themes/agrinho/images/logo-agrinho.png" alt="Logo Agrinho" class="logo-agrinho">
        <h1>Agrinho 2025 - Fernando</h1>
        <p>Conexão Campo-Cidade: A vida que brota da terra</p>
    </header>
    
    <div class="container">
        <h2 style="text-align: center; color: #2E7D32;">Da Terra à Mesa</h2>
        
        <div class="materias-primas">
            <!-- Matéria-Prima 1 - Café -->
            <div class="quadro floating">
                <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Café sendo colhido">
                <div class="quadro-content">
                    <h3>Café Fresco</h3>
                    <p>Grãos de café sendo colhidos manualmente na fazenda, ainda com sua casca vermelha.</p>
                    <p><strong>Regiões produtoras:</strong> Minas Gerais, Espírito Santo, São Paulo</p>
                </div>
            </div>
            
            <!-- Processado 1 - Café Torrado -->
            <div class="quadro floating" style="animation-delay: 0.5s;">
                <img src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Café torrado">
                <div class="quadro-content">
                    <h3>Café Torrado</h3>
                    <p>Grãos de café já torrados, prontos para serem moídos e preparados.</p>
                    <p><strong>Curiosidade:</strong> O Brasil é o maior exportador de café do mundo!</p>
                </div>
            </div>
            
            <!-- Matéria-Prima 2 - Algodão -->
            <div class="quadro floating" style="animation-delay: 1s;">
                <img src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Algodão no pé">
                <div class="quadro-content">
                    <h3>Plantação de Algodão</h3>
                    <p>Algodão sendo cultivado em grandes plantações, pronto para colheita.</p>
                    <p><strong>Regiões produtoras:</strong> Mato Grosso, Bahia, Goiás</p>
                </div>
            </div>
            
            <!-- Processado 2 - Camisa -->
            <div class="quadro floating" style="animation-delay: 1.5s;">
                <img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Camisa de algodão">
                <div class="quadro-content">
                    <h3>Camisa de Algodão</h3>
                    <p>Produto final: uma camisa confeccionada com o algodão cultivado no campo.</p>
                    <p><strong>Curiosidade:</strong> 85% do vestuário brasileiro usa algodão nacional.</p>
                </div>
            </div>
        </div>
        
        <div class="info-section">
            <h2 style="color: #2E7D32;">A Importância Vital Dessa Conexão</h2>
            <p>A relação entre campo e cidade é fundamental para nossa sobrevivência e desenvolvimento. Enquanto o campo fornece alimentos, fibras e energia, a cidade oferece tecnologia, mercados e serviços essenciais.</p>
            
            <div class="data-card">
                <h3>🚜 Alimentando o Mundo</h3>
                <p>O Brasil é o 3° maior exportador agrícola do mundo, alimentando mais de 1 bilhão de pessoas globalmente.</p>
            </div>
            
            <div class="data-card">
                <h3>⚠️ Desmatamento: Um Alerta</h3>
                <p>Apesar da importância, o avanço desordenado sobre biomas ameaça essa relação:</p>
                <ul>
                    <li>🌳 <strong>Amazônia:</strong> Perdeu 17% de sua vegetação nos últimos 50 anos</li>
                    <li>🦜 <strong>Cerrado:</strong> Já perdeu mais de 50% de sua cobertura original</li>
                    <li>💧 <strong>Impacto:</strong> O desmatamento afeta o regime de chuvas que irriga as plantações</li>
                </ul>
            </div>
            
            <div class="data-card">
                <h3>💡 Soluções Sustentáveis</h3>
                <p>Práticas que fortalecem a conexão campo-cidade de forma harmônica:</p>
                <ul>
                    <li>Agricultura regenerativa</li>
                    <li>Comércio justo com pequenos produtores</li>
                    <li>Consumo consciente nas cidades</li>
                    <li>Políticas de preservação ambiental</li>
                </ul>
            </div>
        </div>
    </div>
    
    <footer>
        <p>© 2025 Agrinho - Fernando | Desenvolvido para mostrar a importância do campo e da cidade</p>
        <p>📊 Dados: IBGE, Embrapa, INPE</p>
    </footer>
</body>
</html>