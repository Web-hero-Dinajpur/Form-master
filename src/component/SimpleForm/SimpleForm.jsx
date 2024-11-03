
const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        console.log(name, email)
        console.log('added handle submit');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" /> <br />
                <input type="text" name="email" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;