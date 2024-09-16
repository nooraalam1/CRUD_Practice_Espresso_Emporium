import { Link } from "react-router-dom";

const Coffee = ({ aAll, all, setAll }) => {

    const handleDelete = (_id) => {
        console.log(_id)

        fetch(`http://localhost:3000/coffee/${_id}`,
            { method: 'DELETE' }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    alert("deleted")
                    const remain = all.filter(a => a._id != _id)
                    setAll(remain)
                }
            })
    }

    return (
        <div className='flex text-3xl '>
            {
                aAll.name
            }

            <img src={aAll.url} alt="" /> <hr />
            <div>
                <Link to={`/update/${aAll._id}`}><button >Update</button></Link>  <br />
                <button onClick={() => handleDelete(aAll._id)}>Delete</button>
            </div>
        </div>
    );
};

export default Coffee;