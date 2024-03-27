
let withAuthRedirect = (Component) => {

    let NewComponent = (props) => {
        //проверка на авторизацию
        
        
        // Render the wrapped component with its original props
        return <Component {...props}/>;
    };

    return NewComponent
}

export default withAuthRedirect;