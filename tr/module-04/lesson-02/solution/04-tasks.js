/*
 * Yalnızca iki tür işlem vardır.
 * Hesabınıza para yatırabilir veya hesabınızdan para çekebilirsiniz.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 *  Her işlem, özellikleri olan bir nesnedir: id, type ve amount
 */

const account = {
  // Güncel hesap bakiyesi
  balance: 0,

  // İşlem geçmişi
  transactions: [],

  /*
   * öntem bir işlem nesnesi oluşturur ve döndürür.
   * İşlem tutarını ve türünü kabul eder.
   */
  createTransaction(amount, type) {},

  /*
   * Tutarın bakiyeye eklenmesinden sorumlu yöntem.
   * İşlem tutarını kabul eder.
   * Bir işlem nesnesi oluşturmak için createTransaction öğesini çağırır
   * ve ardından bunu işlem geçmişine ekler
   */
  deposit(amount) {},

  /*
   * Tutarın bakiyeden çıkarılmasından sorumlu yöntem.
   * İşlem tutarını kabul eder.
   * Bir işlem nesnesi oluşturmak için createTransaction öğesini çağırır
   * ve ardından bunu işlem geçmişine ekler.
   *
   * Tutar mevcut bakiyeden büyükse, 
   * para çekme işleminin mümkün olmadığını,
   * yetersiz bakiye olduğunu belirten bir mesaj görüntüler.
   */
  withdraw(amount) {},

  /*
   *  Yöntem geçerli bakiyeyi döndürür
   */
  getBalance() {},

  /*
   *  Yöntem, bir işlem nesnesini id’sine göre arar ve döndürür
   */
  getTransactionDetails(id) {},

  /*
   *  Yöntem, tüm işlem geçmişinden belirli bir işlem türüne ait para miktarını döndürür
   */
  getTransactionTotal(type) {},
};
