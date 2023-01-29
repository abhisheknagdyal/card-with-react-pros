import Card from "../card/card";
import "./directory.css"


const Directory =({categories})=>{
    return(
        <div className="directory">
            {categories.map((category)=>{
                 return  <Card key={category.id} category={category}/>
            })}
        </div>
    );
}

export default Directory;