# Projetas

## Tecnologias
  - Angular JS
  - Spring boot
  - Mysql ou Postgres
  - Maven 3.0
  - TomCat 7 >
  - Java 8
  
 ## Get Start
  - Configurar no arquivo 'ProjetasApi/src/main/resources/application.propoerties' as informações da base utilizada;
  - Para gerar a api entre no diretório 'ProjetasApi/' e execute pelo terminal 'mvn clean install', o arquivo projasapi.war será gerado dentro da pasta 'target';
  - Inicializar tom cat (%TOMCAT_HOME/bin/startup.bat || %TOMCAT_HOME/bin/startup.sh)
  - Inserir o arquivo da api 'projasapi.war' dentro do diretório 'webapp' do tomcat (%TOMCAT_HOME/webapp/)
  - Tomcat realiza atualização de tabelas na base de dados e disponibiliza os end-points da api gerada (swagger -> host:port/projetasapi/)
  - Inserir a pasta 'public' (front-end) no mesmo diretório (%TOMCAT_HOME/webapp/)
  - Fron-end disponível na seguinte url -> host:port/public/
