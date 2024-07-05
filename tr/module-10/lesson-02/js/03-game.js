/**
 * Bir slot makinesi için yazılım yazın.
 * Görevi çözmek için hazır HTML biçimlendirmesini ve temel stilleri kullanın.
 *
 * "Start game" düğmesine tıkladıktan sonra
 * her pencerede sırayla görünmelidir
 * 1 saniye gecikmeli bir ifade ('🤑' veya '👿')
 *
 * Her pencereyi işlerken, Sözler ile bir dizi oluşturun
 * her biri kendi penceresinden sorumlu olacaktır,
 * sonra Promise.allSettled yöntemini kullanarak bu diziyi işleyin
 *
 * Tüm pencereler doldurulduktan sonra, ihtiyacınız olan
 * Komut dosyası oyuncunun kazanıp kazanmadığını otomatik olarak belirlemelidir.
 * Eğer her pencerede aynı ifade varsa, bu kullanıcının kazandığı anlamına gelir
 *
 * Sonuç alanında oyun durumu ('Winner' veya 'Loser') hakkında bir mesaj görüntüleyin
 *
 * "Start game" düğmesine tekrar bastıktan sonra
 * Saha temizlenmeli ve oyun baştan başlamalıdır.
 */
const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');