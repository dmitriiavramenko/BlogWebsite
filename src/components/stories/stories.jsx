import "./stories.scss";
import User from "../../assets/user.jpeg";

// temporary data
const stories = [
    {
      id: 1,
      name: "Sophia Bush",
      img: "https://i.pinimg.com/736x/71/b2/57/71b25781be4f3b06585f286411bafce3.jpg",
    },
    {
      id: 2,
      name: "Sophia Bush",
      img: "https://www.sainsburysmagazine.co.uk/uploads/media/720x770/04/10334-Toast-ice-cream.jpg?v=1-0",
    },
    {
      id: 3,
      name: "Sophia Bush",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1e77e1e-a380-493e-b950-2c4e27c16e55/delqa5x-b16025ab-0219-481f-aeda-2a45b5be0016.png/v1/fill/w_763,h_850,q_80,strp/cute_girl_with_long_hair_by_ashdarbie_delqa5x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODUwIiwicGF0aCI6IlwvZlwvYjFlNzdlMWUtYTM4MC00OTNlLWI5NTAtMmM0ZTI3YzE2ZTU1XC9kZWxxYTV4LWIxNjAyNWFiLTAyMTktNDgxZi1hZWRhLTJhNDViNWJlMDAxNi5wbmciLCJ3aWR0aCI6Ijw9NzYzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.V_LAAL_rYpVEH8gj2WOygpZJzO97OrKEk2V6E2ekbl0",
    },
    {
      id: 4,
      name: "Sophia Bush",
      img: "https://i.etsystatic.com/19969015/r/il/c55538/3089312706/il_570xN.3089312706_hgvv.jpg",
    },
  ];


const Stories = () => {

    return (
        <div className="stories">
            <div className="story">
                {/* user profile and name goes here */}
                <img src={User} alt="" />  
                <span>Sophia Bush</span>
                <button>+</button>
            </div>
           {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
        </div>
    );
}

export default Stories;
