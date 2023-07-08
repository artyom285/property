import "./HomePick.css";

function HomePick() {
  return (
    <div className='HomePick' id='residences'>
        <div className="picks-block">
            <div className="picks">
                <div className="pick p-1" data-aos="fade-down">
                    <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="pick" />
                    <div className="pick-data">
                        <p className="pick-title">Aliva Private Garden</p>
                        <div className="pick-price">
                            <p className="sale">-10%</p>
                            <p className="old">$66.356</p>
                            <p className="new">$59.720</p>
                        </div>
                    </div>
                </div>
                <div className="pick p-2" data-aos="fade-down">
                    <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="pick" />
                    <div className="pick-data">
                        <p className="pick-title">Garden City Assat</p>
                        <div className="pick-price">
                            <p className="sale">-10%</p>
                            <p className="old">$49.748</p>
                            <p className="new">$44.773</p>
                        </div>
                    </div>
                </div>
                <div className="pick" data-aos="fade-down">
                    <img src="https://images.unsplash.com/photo-1469964062538-06fad433a132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="pick" />
                    <div className="pick-data">
                        <p className="pick-title">Gables Luxurios House</p>
                        <div className="pick-price">
                            <p className="sale">-10%</p>
                            <p className="old">$35.159</p>
                            <p className="new">$31.643</p>
                        </div>
                    </div>
                </div>
                <div className="pick p-4" data-aos="fade-down">
                    <img src="https://images.unsplash.com/photo-1543071293-d91175a68672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="pick" />
                    <div className="pick-data">
                        <p className="pick-title">Aliva Private Garden</p>
                        <div className="pick-price">
                            <p className="sale">-10%</p>
                            <p className="old">$75.043</p>
                            <p className="new">$67.538</p>
                        </div>
                    </div>
                </div>
                <div className="pick p-5" data-aos="fade-down">
                    <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80" alt="pick" />
                    <div className="pick-data">
                        <p className="pick-title">Aliva Private Garden</p>
                        <div className="pick-price">
                            <p className="sale">-10%</p>
                            <p className="old">$62.024</p>
                            <p className="new">$55.821</p>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <a href="#" className="more">
                    <box-icon name='building-house' color="white"></box-icon>
                    <span>More residences</span>
                </a>
            </center>
        </div>
    </div>
  )
}

export default HomePick