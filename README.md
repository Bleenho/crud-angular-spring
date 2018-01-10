# Crud veículo
> Controle de veículo

O projeto convém de uma api (ProjetasApi)que controla veículos como visulizar , inserir, alterar dados e deletar do banco de dados MYSQL (CRUD), 
sendo consumido pelo front-end (public) desenvolvido em Angularjs.

### Requisitos
* Java 8
* Maven 3
* Tomcat 7>
* Mysql ou Postgres

![](../header.png)

## Configuração da base

* No arquivo '/ProjetasApi/src/main/resources/application.properties' possui configurações de base Mysql e Postgres, desconmentar e configurar a adequada.

## Instalação

1 - Dentro do projeto ProjectasApi executar o comando:

```sh
mvn clean install
```

2 - Mover arquivo  'ProjetasApi/target/projetasapi.war' Para '%TOMCAT_HOME%/webapp/projetasapi.war'

3 - Mover arquivo  'public' Para '%TOMCAT_HOME%/webapp/public'

4 - Iniciar Tomcat
	* Sem alterações -> %TOMCAT_HOME%/bin/startup.bat(sh) 

## Exemplo de uso

O Tomcat disponibiliza (padrão) na porta 8080

### Swagger da API
```sh
http://localhost:8080/projetasapi
```

### Front-end manipulando o swagger
```sh
http://localhost:8080/public
```


## Histórico de lançamentos

* 0.1.0
    * O primeiro lançamento adequado
* 0.0.1
    * Trabalho em andamento

## Meta

Pablo Ribeiro– [@Pablo] – pablo.developerweb@gmail.com