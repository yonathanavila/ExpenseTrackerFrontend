import React, {Component} from 'react';
import { naxios } from '../../../../Utilities';

import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        };
        //autobinding
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSigninBtnClick = this.onSigninBtnClick.bind(this);
    }
    onChangeHandler(e){
        const{name, value} = e.target;
        this.setState({...this.state, [name]:value}); 
    }
    onSigninBtnClick(e){
        console.log(this.state);
        naxios.post('/api/security/login', this.state)
            .then(({data, status})=>{
                console.log(data)
                this.props.setAuth(data.token, data.user)
                }
            )
            .catch((err)=>{
                console.log(err)
                this.setState({"error":"Correo o contraseña incorrectas. Intenda de nuevo"});
                }
            )
        ;
    }
    render(){
        console.log(this.props.auth);
        return (
            <section>
                <h1>User Login</h1>
                <section className="main fix640">
                    <Campo 
                        caption="Email"
                        value={this.state.email}
                        name="email"
                        onChange={this.onChangeHandler}
                    />
                   <Campo
                        caption="Password"
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChangeHandler}
                   />
                    <section className="action">
                        <Button 
                            caption="Login" 
                            onClick={this.onSigninBtnClick} 
                            customClass="primary"
                        />
                        <Button 
                            caption="Signin" 
                            customClass="link"
                        />
                    </section>
                </section>
            </section>
        );
    }
}