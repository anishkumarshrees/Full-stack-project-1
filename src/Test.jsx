import Button from "./Button"



function Test(){
    return(
        <>
        {/* <Button/> this is only commponent which we cannot change in every page so we use poprs for that */}
        <Button haha="login"/>
        <Button haha="register"/>
        <Button haha="logout"/>
        {/* props use garni tarika chai <button hello="login"/> hello is key and login is object */}
        </>
    )
}

export default Test