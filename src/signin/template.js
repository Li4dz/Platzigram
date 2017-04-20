import yo from 'yo-yo';
import landing from '../landing';
 
var box = yo`<div class="col s12 m7">
                            <div class="signup-box">
                                <div class="row">
                                    <h1 class="platzigram">Platzigram</h1>
                                    <form class="signup-form">
                                        <div class="section">
                                            <a class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
                                            <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"/>Iniciar Sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="text" name="username" placeholder="Nombre de Usuario" />
                                            <input type="password" name="password" placeholder="Contraseña" />
                                            <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿No Tienes una cuenta? <a href="/signup">Regístrate</a>
                                </div>
                            </div>
                        </div>`;

module.exports = landing(box);