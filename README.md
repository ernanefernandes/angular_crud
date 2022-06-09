# CMP - Central de Manutenção de Preço
   O sistema CMP - Central de Manutenção de Preço é composto por três aplicações servidoras: AGFA-SERVICES e AGFA-CMP-SERVICES.
    •	AGFA-SERVICES: É a aplicação responsável por gerenciar e disponibilizar, com segurança, as informações relacionadas ao banco de dados hospitalar, tais como Produtos, Tabelas, Usuários e Preços. Podemos configurar uma ou mais bases HIS
   •	AGFA-CMP-SERVICES: É a aplicação responsável por realizar a comunicação entre os Sites (AGFA-SERVICES e o AGFA-CMP) disponibilizados na rede. Também é responsável por solicitar, configurar, gerenciar  e validar as atualizações de preço nas bases.
   •	AGFA-CMP: É a aplicação responsável pelos processos de unificação das informações oriundas de todas as bases HCIS.
   
##💻 Tecnologies
  - Maven
  - Jboss
  - Hibernate
  - Javax.servlet
  - Vaadin.version 7.7.6
  - Jasperreports.version 6.1.0
  - Olap4j.version 1.2.0
  - Ojdbc6.version 11.2.0

## ⌨️ Editor / IDE /Servidor de aplicação

  - SpringToolSuite 4
  - WildFly (wildfly-8.2.0.Final.rar); 

## Orientações para desenvolvedores 
- Leia o manual de instalação e do usuario que estão no  Sharepoint Dedalus.
- Importe os projetos como Maven Project
- Necessário adribuir as libs 'ojdbc6'  no diretorio C:\Users\XXXX\.m2\repository\com\oracle\ojdbc6\11.2.0 XXXX seu código de usuario configurado no perfil do usuario(as libs estão no FTP da fabrica).
- Atualize as dependencias do Maven
- De um Run clean install em todos os projetos. 
- Siga a sequencia para instalação dos projetos no Server:  AGFA_CMP_SERVICE > AGFA_CMP > AGFA_SERVICE
-  Geralmente na base CMP usa se usuario e senha ADMMDM;
-  Para configurar o acesso a base de dados edite o arquivo hibernate.cfg.xml(Detalhes no manual)   

## Iniciando o sistema
- Para o sistema funcionar, como administrador execute o arquivo “standalone.bat” em 'diretorio'\Wildfly-8.2.0.Final\Bin. 
   
   
   
