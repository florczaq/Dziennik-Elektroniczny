# Dziennik-Elektroniczny
React,js, Java Spring, MySQL

### Informacje o projekcie
 ##### Autor: Florczak Mikołaj 
 ##### Klasa: 4ig
 ##### Nazwa przedmiotu: Informatyka
 ##### Nazwa projektu: Dziennik elektroniczny 

Projekt przedstawia dziennik elektroniczny po stronie ucznia w formie aplikacji webowej. 

### Spełnia on podstawowe funkcje, takie jak: 
  - System logowania,
  - Uwagi,
  - Oceny,
  - Pisanie, odczytywanie i pisanie wiadomosci,
  - Sprawdzanie aktualności szkolnych,
  - Sprawdzenie informacji o swoim koncie,
  - Sprawdzenie planu lekcji

### Frontend 
  Napisany w języku Java Script. Do napisania aplikacji wykorzystałem framework React.JS pozwalający na zmianę i render elementów w czasie rzeczywistym. 
  
  Z bibliotek korzystam z "axios". Jest to JavaScriptowa biblioteka do odbierania i wysyłania zapytań - HTTP (GET, PUT, POST, DELETE), czyli RestAPI; 
  Do szyfrowania zapisanych danych korzystam z biblioteki CryptoJS. Szyfruję w standardzie AES (Advanced Encryption Standard)
  
### Backend
  Napisany w języku Java w środowisku IntelliJ IDEA Community Edition. Wykorzystałem framework Java Spring pozwalający na tworzenie serwera Rest. 
  
  Dane z bazy danych pobierałem za pomocą JDBC (Java DataBase Connectivity). Pozwala on wysłać zapytania do bazy danych w aplikacjach Java.
  
### Baza danych
  Relacyjna baza danych (MySQL). Do zarządzania bazą wykorzystałem MySQL Workbench. 
  
  ![image](https://user-images.githubusercontent.com/84631301/216785625-6ca822e0-2478-4c68-bf0a-a828a1c26e92.png)




### Struktura projektu


 ![Untitled Diagram](https://user-images.githubusercontent.com/84631301/216786592-a7c3ba46-f812-478d-9ce3-ba1b861d3594.png)



### Rozbudowa projektu
  Projekt można poszerzyć o żadziej użwyanie opcje (jak np. zastępstwa, frekwencja itp.). Ja jednak skupiłem się na najczęściej (moim zdaniem) używane przez uczniów opcje. Jest to strona ucznia, więc można by było rozbudować projekt o stronę nauczyciela, ale jest to dużo bardziej skomplikowany projekt i co ważniejsze bardziej czasochłonny. 
    
### Urochomenie projektu
  Aby uruchomić projekt potrzebny jest specjalnie skonfigurowane urządzenie. 
  Potrzebne jest oprogramowanie takie jak NPM oraz Node.js dla Klienta oraz MAVEN i Java dla Serwera.
  
### Źródła
  - https://spring.io/guides
  - https://reactjs.org/docs/create-a-new-react-app.html
