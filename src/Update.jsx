import { Link, useLoaderData } from "react-router-dom";

const Update = () => {

    const b = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const url = e.target.url.value;
        const Info = { name, url }

        fetch(`http://localhost:3000/coffee/${b._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' defaultValue={b.name} /> <br /> <br />
                <input type="text" name='url' placeholder='Photo URL' defaultValue={b.url} /> <br /> <br />
                <button>Submit</button>

            </form>
            <Link to={'/'}><button >Go Home</button></Link>
        </div>
    );
};

export default Update;