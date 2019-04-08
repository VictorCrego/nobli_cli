# Quasar App

Entre no APP pelo link após fazer o deploy no firebase:

https://appeventos-2ae82.firebaseapp.com/#/


Para rodar aplicação na máquina local

- Clonar diretório git no diretório pai:

git clone https://github.com/VictorCrego/nobli_cli

- Instalar dependências:

npm install -g vue-cli
npm install -g quasar-cli
npm install -g firebase-tools

- Inicializar Quasar no diretório do projeto (diretório onde projeto foi clonado). Durante a instalação, não selecionar nenhuma feature:

quasar init .

- Utilizar as seguintes opções para o comando acima:

? Generate project in current directory? Yes
? Project name (internal usage for dev) nobli_cli
? Project product name (official name) Quasar App
? Project description A Quasar Framework app
? Author pedrokoehler <pedrokohlerbh@gmail.com>
? Check the features needed for your project: (none)
? Cordova id (disregard if not building mobile apps) org.cordova.quasar.app
? Should we run `npm install` for you after the project has been created? (recommended) NPM

- Resetar arquivos do projeto de acordo com diretório github (descartar modificações feitas pelo 'quasar init'):

git reset --hard

- Instalar dependência "vuelidate":

npm install --save vuelidate

- Pronto. Agora é só rodar. Executar quasar dev no diretório:

quasar dev