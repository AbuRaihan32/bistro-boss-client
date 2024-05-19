

const MenuItem = ({item}) => {
    const {name,
        recipe,
        image,
        price} = item;

    return (
        <div className="flex gap-6">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <div className="flex justify-between">
                    <h1>{name} ----------</h1>
                    <p className="text-[#BB8506]">$ {price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;