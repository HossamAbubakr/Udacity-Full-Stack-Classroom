
<div align="center">
<h1> Eslint and Prettier Step by Step </h1>
 <img src="https://raw.githubusercontent.com/codarme/stylelint/HEAD/logo.png" width="400"/>

</div>

## 1  🎨 installation Nodejs

- 1.1 windows
  - install <a href="https://nodejs.org/en" />Nodejs</a>
  - choose LTS Version (Long Term Support)
  - there are also binaries for `Linux` / `Mac` if u don't want to install it from the terminal once you are done from download unzip it & add this `./sh`

- 1.2 mac or linux ( Terminal )

  - ```bash
       brew update && brew upgrade node
       # or linux
       sudo apt-get update && upgrade node
     ```

## 2  🎇 how to initial npm package

- 2.1  create folder project eslint-prettier

- 2.2  init npm package in this directory with the following command

  - ```bash
       $npm init --yes
       #  or 
       $yarn init — yes
    ```

## 3 🐱‍🚀 Prettier & config step by step

- 3.1 📦 Install prettier

  - ```bash
       $ yarn add prettier
       # or with npm
       $ npm i prettier
       ```

- 3.2 🌴Create `.prettierrc`
  - on linux or mac

    - ```bash
         touch .prettierrc
       ```

  - on windows or create new file and name it `.prettierrc` or from `cmd`

    - ```cmd
        echo  "" > .prettierrc
        ```

  - to test prettier open `terminal/cmd` were `package.json` is

    - ```cmd
        npm run prettier
        ```

- 3.3 🚑 Add this config of your `.prettierrc` file

  - ```json
         {
         "printWidth":80 ,
         "tabWidth":2 ,
         "useTabs":false,
         "semi":true,
         "singleQuote": true
         }
     ```

- 3.4 ⚡ Update scripts section in `package.json`

  - ```json
        "scripts":{
       "prettier":"prettier --write test \"*.js\" --check"
        },
     ```

## 4 🔥 Installation config for eslint with prettier

- 4.1 🚅 run this in your terminal

    - ```ps
          npm i --save-dev eslint @typescript-eslint/parser typescript \
          eslint-config-prettier eslint-plugin-import eslint-plugin-node \
          eslint-plugin-promise eslint-plugin-react eslint-plugin-jsx-a11y \
          eslint-plugin-standard prettier
      ```

## 5 🚀 Create eslint file 
- ***⚠*** be sure `eslint installed` 

- 5.0 `automatic` : file will generated

  - run this in your terminal

    - ```shell
          npx eslint init
        ```

  - if  eslint` installed `global` run this it will ask u some question

    - ```ps
          eslint --init
       ```

- 5.1 `manually`: follow these steps and u will create the file and config
  - run this in your terminal

    - ```shell
        echo " module.exports = {
            env: {
              browser: true,
              es2021: true,
            },
            extends: ['airbnb-base', 'prettier'],
            plugins: ['prettier'],
            overrides: [
              {
                env: {
                  node: true,
                },
                files: ['.eslintrc.{js,cjs}'],
                parserOptions: {
                  sourceType: 'script',
                },
              },
            ],
            parserOptions: {
              ecmaVersion: 'latest',
              sourceType: 'module',
            },
            rules: {
              'prettier/prettier': ['error'],
            },
          }
          " > .eslintrc.cjs
       ```

## 6 🔥Fixer automatically

  - 6.1 ⚡ add this in your package.json be sure you describe the folder of your project and replaced it with **test** in `prettier`
    
    - ```json
        "lint": "eslint . --ext .js",
        "lint:fix": "npm run lint -- --fix",
        "prettier:fix": "npm run prettier -- --write",
        "format": "npm run prettier:fix && npm run lint:fix"
      ```
## 7 ✔ Let's Run this magic
  - 7.1 run this in your terminal
    ```bash
        npm run format
      ```
 - 7.2 output
    - ```bash
        > test@1.0.0 format
        > npm run prettier:fix && npm run lint:fix
        
        
        > test@1.0.0 prettier:fix
        > npm run prettier -- --write
        
        
        > test@1.0.0 prettier
        > prettier --write test "*.js" --check --write
        
        Checking formatting...
        All matched files use Prettier code style!
        ```
  ## 8 🌏 Resources
   - <a href="https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/"> logrocket 🔥</a>
   - <a href="https://noidejs.org/"> nodejs ⚡</a>
   

  
