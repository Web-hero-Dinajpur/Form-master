
const Reusable = ({formTitle, handleSubmited, submitBtnText='Submit'}) => {


    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmited}>
                <input type="text" name="name" /><br />
                <input type="email" name="email"/><br />
                <input type="password" name="password" id="" /> <br />
                <input type="submit" value="Submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default Reusable;