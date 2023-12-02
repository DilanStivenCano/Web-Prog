import { Value, HeaderTitle } from "./../../components";
import './ValuesPage.css'
import Value1 from '../../assets/Value1.png'
import Value2 from '../../assets/Value2.png'
import Value3 from '../../assets/Value3.png'

const valuesData = [
  {
    img: Value1,
    name: "Integrity",
    description: "Our commitment to honesty<br>and ethical behavior.",
  },
  {
    img: Value2,
    name: "Collaboration",
    description: "Working together to<br>achieve shared goals.",
  },
  {
    img: Value3,
    name: "User Centered",
    description: "Putting our users' needs at the<br>center of everything we do.",
  },
];

export function ValuesPage() {
  return (
    <div className="valueBody">
      <HeaderTitle title="OUR VALUES" />
      <div className="valuesContainer">
        {valuesData.map((value, index) => (
          <Value
            key={index}
            img={value.img}
            name={value.name}
            description={<div dangerouslySetInnerHTML={{ __html: value.description }} />}
          />
        ))}
      </div>
    </div>
  );
}
