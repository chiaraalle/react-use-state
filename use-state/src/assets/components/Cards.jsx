function Cards({title, description}){
    return(
        <div className="card">
            <div className="card-title">
                {title}
                <div className="card-body">
                    <p>{description}</p>
                </div>

            </div>

        </div>
    )
}

export default Cards