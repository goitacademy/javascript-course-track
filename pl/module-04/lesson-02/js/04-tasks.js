/*
 * Istnieją tylko dwa rodzaje transakcji.
 * Można wpłacać lub wypłacać pieniądze ze swojego konta.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Każda transakcja jest obiektem z właściwościami: id, type i amount
 */

const account = {
  // Bieżący bilans konta
  balance: 0,

  // Historia transakcji
  transactions: [],

  /*
   * Metoda tworzy i zwraca obiekt transakcji.
   * Przyjmuje kwotę i typ transakcji.
   */
  createTransaction(amount, type) {},

  /*
   * Metoda odpowiadająca za dodanie kwoty do bilansu.
   * Przyjmuje kwotę transakcji.
   * Wywołuje createTransaction w celu utworzenia obiektu transakcji,
   * a następnie dodaje go do historii transakcji.
   */
  deposit(amount) {},

  /*
   * Metoda odpowiedzialna za usunięcie kwoty z bilansu.
   * Przyjmuje kwotę transakcji.
   * Wywołuje createTransaction w celu utworzenia obiektu transakcji,
   * a następnie dodaje go do historii transakcji.
   *
   * Jeśli amount jest większa niż bieżące saldo, wyświetl komunikat,
   * że wypłata takiej kwoty nie jest możliwa, nie ma wystarczających środków.
   */
  withdraw(amount) {},

  /*
   * Metoda zwraca bieżący bilans
   */
  getBalance() {},

  /*
   * Metoda wyszukuje i zwraca obiekt transakcji według id
   */
  getTransactionDetails(id) {},

  /*
   * Metoda zwraca kwotę środków 
   * określonego typu transakcji z całej historii transakcji.
   */
  getTransactionTotal(type) {},
};
