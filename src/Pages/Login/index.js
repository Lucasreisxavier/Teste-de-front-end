import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import {AreaLogin} from './styled';

import {BtnDefaultIcons} from '../../components/styled';
import {BtnDefault} from '../../components/styled';

import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default() =>{

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/Register">
                    <AreaLogin>

                        <h1 className="organize">

                        <Link to="/"> <ArrowBackIosIcon/> </Link>

                        Crie Sua Conta!</h1>
                        <p>Crie sua conta grátis!</p>

                        <form>
                            <div className="form--imput">
                                <label>Nome</label>
                                <input type="text"/>
                            </div>
                            <div className="form--imput">
                                <label>E-mail</label>
                                <input type="email"/>

                             </div>

                            <div className="form--imput">
                                <label>Senha</label>
                                <input type="password"/>

                            </div>
                        <BtnDefault>Comece Agora</BtnDefault>

                             <div className="abaixodologin">
                            já tem uma conta? 
                             <Link to="/">Fazer Login!</Link>
                            </div>
                        </form>

                    </AreaLogin>
        
                </Route>

                <Route exact path="*">
                    <AreaLogin>
                        <h1>Faça o Login em sua conta!</h1>

                        <BtnDefaultIcons>
                            <FacebookIcon/>
                            <div className="center">Fazer Login com o Facebook</div>
                        </BtnDefaultIcons>

                        <BtnDefaultIcons>
                            <GTranslateIcon/>
                            <div className="center">Fazer Login com o Google</div>
                        </BtnDefaultIcons>

                     <p>OU</p>

                        <form>
                            <div className="form--imput">
                                <label for="email">E-mail</label>
                                <input type="email" name ="email" required/>

                            </div>

                            <div className="form--imput">
                                <label for="senha">Senha</label>
                                <input type="password" name ="senha" required/>

                             </div>
            <BtnDefault>Entrar</BtnDefault>

            <div className="abaixodologin">
                Não tem uma conta? 
                <Link to="/register">Registre-se</Link>
            </div>
        </form>

        </AreaLogin>
        </Route>
        </Switch>
        
    </BrowserRouter>
    )
}