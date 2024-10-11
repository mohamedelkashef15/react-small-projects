// import { personData } from "../data";
import { IPerson, IPersons } from "../interfaces";
import Person from "./Person";
import styles from "./Persons.module.scss";

function Persons({ persons }: IPersons) {
  return (
    <div className={styles.persons}>
      {persons.map((person: IPerson) => {
        return <Person key={person.id} img={person.img} age={person.age} name={person.name} />;
      })}
    </div>
  );
}

export default Persons;
