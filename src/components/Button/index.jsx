function Button(props) {
    const {title, changeCount} =props

    return (
        <button onClick={changeCount} className="mx-10 bg-blue-500 rounded-lg text-white text-xl px-4 shadow-md">
            {title}
        </button>
    )
}

export default Button