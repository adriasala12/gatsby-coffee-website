import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <Title title="our story"></Title>
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic assumenda amet nisi! Fugiat at saepe nihil nostrum architecto, velit porro ipsum eum repellendus aperiam sed nam. Laudantium, delectus! Alias, architecto?
                        </p>
                        <Link to='/about'>
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
