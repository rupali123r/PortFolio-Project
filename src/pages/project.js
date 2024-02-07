import { useEffect, useRef } from 'react';
function Project() {

    const ref = useRef(null);

    const scrollToElement = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      scrollToElement();
    }, []);

    return (
        <>

            <div className="container-fluid pt-5 pb-5 height">
                <div ref={ref}  className="container">
                    <div className="project-section">
                        <h2>My Projects</h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ display: "flex", justifyContent: "center", border: "none" }}>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Games</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Website</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Apps</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="main-tab" data-bs-toggle="tab" data-bs-target="#main-tab-pane" type="button" role="tab" aria-controls="main-tab-pane" aria-selected="false" >All</button>
                                    </li>
                                </ul>
                            </div>


                            <div className="col-lg-12">
                                <div class="tab-content pt-4" id="myTabContent">

                                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="1_VRRjpA33vudDWtyRpxwdmA.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Tic Toy Game</h3>
                                                        <a href="https://rupali123r.github.io/JavaScript-Tic-Toy_Game/">Play</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="hug wall.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Snake Game</h3>
                                                        <a href="https://rupali123r.github.io/Snake_game/">Play</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="gujarati-letter-bubble-pop-game.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Bubble Game</h3>
                                                        <a href="https://rupali123r.github.io/BubbleGame/">Play</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="0264bcd1627ee2a35fb39aa18cdad77d.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Dragan War Game</h3>
                                                        <a href="https://rupali123r.github.io/dragan_game/">Play</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="free-images-for-commercial-use--15-.png" />
                                                    <div className="pro-overlay">
                                                        <h3>Bhopal.city</h3>
                                                        <p>Serching Website</p>
                                                        <a href="https://bhopal.city/" target="_blank">Live </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="full-shot-woman-online-shopping-concept_23-2149629600.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>resolvegroup.in</h3>
                                                        <p>E-Commerce Website</p>
                                                        <a href="https://resolvegroup.in/projects/nvsparkle/" target="_blank">live</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="istockphoto-171591277-1024x1024.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>Breakingnewsmp</h3>
                                                        <p>News Website</p>
                                                        <a href="https://breakingnewsmp.com/" target="_blank">Live</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="istockphoto-871231100-1024x1024.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>Orfarm Website</h3>

                                                        <a href="https://rupali123r.github.io/Orfarm_Website_fullResponsive/">view code</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="laptop-show-map-route-direction-graphic_53876-137603.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>artab.com</h3>
                                                        <p>Booking Website</p>
                                                        <a href="https://aratb.com/" target="_blank">Live</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="online-purchasing-payment-e-commerce-banking_53876-127604.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>DarkMode.com</h3>
                                                        <p>E-commerce Website</p>
                                                        <a href="https://darkmode.store/" target="_blank">live</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="video-game-player-landing-page_23-2149079054.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>Gaming Solution Website</h3>
                                                        <a href="https://resolvegroup.in/projects/rust-consolecommunity/" target="_blank">Live</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="work1.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>Top Deal</h3>
                                                        <p>E-commerce website</p>
                                                        <a href="https://rupali123r.github.io/Top-Deals/">view code</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="date.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Age Calculator App</h3>
                                                        <p></p>
                                                        <a href="https://rupali123r.github.io/AgeCalculator/" target="_blank">View Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="image_processing20200502-14719-1o0yic3.png" />
                                                    <div className="pro-overlay">
                                                        <h3>Calculator App</h3>
                                                        <p></p>
                                                        <a href="https://rupali123r.github.io/javascript_calculator/" target="_blank">View Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="dating-app-chat-interface-template-set_23-2148530299.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>Chat App</h3>
                                                        <p>Dating Chat App Design</p>
                                                        <a href="https://rupali123r.github.io/Chat_Box_Using_JavaScript/" target="_blank">view code </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0 ">
                                                <div className="project">
                                                    <img src="4lx9jf.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Meme Generator App</h3>
                                                        <p>Random Meme Generator App</p>
                                                        <a href="https://rupali123r.github.io/JavaScript_Random_meme_generate_using_api/" target="_blank">view Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="multiple-option-quiz-game-template-problem-solving-concept_1017-45303.avif" />
                                                    <div className="pro-overlay">
                                                        <h3>Quiz question App</h3>
                                                        <p></p>
                                                        <a href="https://rupali123r.github.io/JavaScript-quiz_Question_App/" target="_blank">view Code </a>
                                                    </div>
                                                </div>
                                            </div>
                                          

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="f6a5a5a29eab0f0e245d30470b672855.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Recipe App</h3>
                                                        <p></p>
                                                        <a href="https://rupali123r.github.io/JavaScript_Recipe_App_Using_api/" target="_blank">Live </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="ff033dc39574f5dfae4c91a5605f1120.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>To do List App</h3>
                                                        <p></p>
                                                        <a href="" target="_blank">view code </a>
                                                    </div>
                                                </div>
                                            </div>

                                              <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="screen-shot-2023-01-10-at-11-40-04-am.webp" />
                                                    <div className="pro-overlay">
                                                        <h3>InstaGram Stroy App</h3>
                                                        <p></p>
                                                        <a href="https://rupali123r.github.io/Insta_Effects_project/" target="_blank">view code </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="main-tab-pane" role="tabpanel" aria-labelledby="main-tab" tabindex="0">

                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="ff033dc39574f5dfae4c91a5605f1120.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>To do List App</h3>
                                                        <p></p>
                                                        <a href="" target="_blank">view code </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0 ">
                                                <div className="project">
                                                    <img src="4lx9jf.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Typing master App</h3>
                                                        <p> Typing Master App</p>
                                                        <a href="https://rupali123r.github.io/Typing-master-App/" target="_blank">view Code</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="free-images-for-commercial-use--15-.png" />
                                                    <div className="pro-overlay">
                                                        <h3>Bhopal.city</h3>
                                                        <p>Serching Website</p>
                                                        <a href="https://bhopal.city/" target="_blank">Live </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="dating-app-chat-interface-template-set_23-2148530299.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>Chat App</h3>
                                                        <p>Dating Chat App Design</p>
                                                        <a href="https://rupali123r.github.io/Chat_Box_Using_JavaScript/" target="_blank">view code </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="online-purchasing-payment-e-commerce-banking_53876-127604.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>DarkMode.com</h3>
                                                        <p>E-commerce Website</p>
                                                        <a href="https://darkmode.store/" target="_blank">live</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="hug wall.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Snake Game</h3>
                                                        <a href="https://rupali123r.github.io/Snake_game/">Play</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="online-purchasing-payment-e-commerce-banking_53876-127604.jpg" />
                                                    <div className="pro-overlay">
                                                        <h3>DarkMode.com</h3>
                                                        <p>E-commerce Website</p>
                                                        <a href="https://darkmode.store/" target="_blank">live</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 p-0">
                                                <div className="project">
                                                    <img src="0264bcd1627ee2a35fb39aa18cdad77d.gif" />
                                                    <div className="pro-overlay">
                                                        <h3>Dragan War Game</h3>
                                                        <a href="https://rupali123r.github.io/dragan_game/">Play</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
















                        {/* 

                        <div className="col-lg-3">
                            <div className="project">
                                <img src="" />
                                <div className="pro-overlay"></div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="project">

                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="project">

                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="project">

                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="project">

                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="project">

                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            {/* </div > */}

        </>
    )
}

export default Project;