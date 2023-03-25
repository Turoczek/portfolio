import Router from 'next/router'

const NotFoundPage = () => {
    return <div>
        <h1>
            Error 404
        </h1>
        <h2>
            Page will be added soon
        </h2>
        <button onClick={() => Router.back()}>
            Go back
        </button>
    </div> 
}

export default NotFoundPage