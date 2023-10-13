import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const initialcontacts = [
  {
    name: "Arnold Schwarzenegger",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg",
    popularity: 18.216362,
    id: "4fe4d8ef-0fac-4bd9-8c02-ed89b668b2a9",
    wonOscar: false,
    wonEmmy: true,
  },
  {
    name: "Ben Affleck",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg",
    popularity: 9.157077,
    id: "1599707e-5f49-4529-b920-db3831419b04",
    wonOscar: true,
    wonEmmy: false,
  },
  {
    name: "Idris Elba",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    popularity: 11.622713,
    id: "11731993-0604-4bee-80d5-67ad845d0a38",
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: "Johnny Depp",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    popularity: 15.656534,
    id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: "Monica Bellucci",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    popularity: 16.096436,
    id: "0ad5e441-3084-47a1-9e9b-b917539bba71",
    wonOscar: false,
    wonEmmy: false,
  },
];

function App() {
  const [cont, setContacts] = useState(initialcontacts);
  const [availableContacts, setAvailableContacts] = useState(contacts.slice(5));

  const addContact = () => {
    if (availableContacts.length > 0) {
      const randomizedIndex = Math.floor(
        Math.random() * availableContacts.length
      );
      const randomContact = availableContacts[randomizedIndex];
      console.log(randomContact);

      const updatedAvailableContacts = availableContacts.filter(
        (contact) => contact !== randomContact
      );
      setAvailableContacts(updatedAvailableContacts);

      setContacts([...cont, randomContact]);
    }
  };
  const sortPopularity = () => {
    const sortedList = contacts.sort((a, b) => {
      const popularityA = a.popularity;
      const popularityB = b.popularity;

      if (popularityA < popularityB) {
        return 1;
      }
      if (popularityA > popularityB) {
        return -1;
      } else return 0;
    });
    console.log(sortedList);
    setContacts(sortedList);
  };
  const sortName = () => {
    const sortedNameList = contacts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(sortedNameList);
    setContacts(sortedNameList);
  };
  const deleteContact = (contactID) => {
    const filteredContact = cont.filter((contact) => {
      return contact.id !== contactID;
    });
    setContacts(filteredContact);
  };
  return (
    <div className="App">
      <div className="btnContainer">
        <button className="btn" onClick={addContact}>
          Add Random Contact
        </button>
        <button className="btn" onClick={sortPopularity}>
          Sort by popularity
        </button>
        <button className="btn" onClick={sortName}>
          Sort by name
        </button>
      </div>
      <table>
        <thead className="header">
          <tr>
            <th className="name">Picture</th>
            <th className="name">Name</th>
            <th className="name">Popularity</th>
            <th className="name">Won an Oscar</th>
            <th className="name">Won an Emmy</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {cont.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className="pic" src={contact.pictureUrl} />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>{(Math.round(contact.popularity * 10) / 10).toFixed(1)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : null}</td>
                <td>{contact.wonEmmy ? <p>🌟</p> : null}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

// <div className="App">
//       <h1>Contracts</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Picture</th>
//             <th>Name</th>
//             <th>Popularity</th>
//           </tr>
//         </thead>

//         <tbody>
//           {contacts.map((contact, index) => {
//             if (index <= 5) {
//               return (
//                 <tr>
//                   <td>
//                     <img className="pic" src={contact.pictureUrl} />
//                   </td>
//                   <td>{contact.name}</td>
//                   <td>
//                     {(Math.round(contact.popularity * 10) / 10).toFixed(1)}
//                   </td>
//                 </tr>
//               );
//             }
//           })}
//         </tbody>
//       </table>
