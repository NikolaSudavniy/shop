import React, { useEffect } from 'react'

function TestBd() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/locations');
    
        if (!response.ok) {
          throw new Error(`Ошибка получения данных: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        
      } catch (error) {
        console.error('Произошла ошибка при получении данных:', error.message);
      }
    };
    
    const deleteLocation = async () => {
      const locationIdToDelete = 4;
 
      try {
        const response = await fetch(`http://localhost:3000/locations/${locationIdToDelete}`, {
          method: 'DELETE'
        });
 
        if (response.ok) {
          console.log(`Место с id ${locationIdToDelete} успешно удалено из базы данных.`);
        } else {
          console.error('Ошибка при удалении места из базы данных.');
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

     //***
   //добавление
   const addLocation = async () => {
    try {
      const newLocation = {
        "id": Date.now(),
        "name": "NEWLOCATION",
        "city": "aaa",
        "state": "IN",
        "photo": "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
        "availableUnits": 1,
        "wifi": true,
        "laundry": false
      };

      const response = await fetch('http://localhost:3000/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocation)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Location added successfully:', result);
    } catch (error) {
      console.error('Error adding location:', error.message);
    }
  };

  const updateLocation = async () => {
    const locationIdToUpdate = 2;

    const response = await fetch(`http://localhost:3000/locations/${locationIdToUpdate}`);
    const currentLocationData = await response.json();

    const updatedLocationData = {
      ...currentLocationData,
      "name": "Updated Name",
      "city": "Updated City"
    };

    try {
      const updateResponse = await fetch(`http://localhost:3000/locations/${locationIdToUpdate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLocationData)
      });

      if (updateResponse.ok) {
        console.log(`Место с id ${locationIdToUpdate} успешно обновлено в базе данных.`);
      } else {
        console.error('Ошибка при обновлении места в базе данных.');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

    updateLocation();

    // addLocation();
    // deleteLocation();

    fetchData();

  }, []);

  return (
    <>BD</>
  )
}

export default TestBd
