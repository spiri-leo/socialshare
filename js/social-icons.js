/**
 *
 * Social Icons
 *
 * This is script needs share current page only website
 *
 * @author spiri-leo
 * @version 0.1
 *
*/

// Start

// Facebook
function shareFacebook() {
  console.log('Opening Facebook sharing...');
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href);
}

// Twitter
function shareTwitter() {
  console.log('Opening Twitter sharing...');
  window.open("https://twitter.com/intent/tweet?url=" + window.location.href);
}

// Telegram
function shareTelegram() {
  console.log('Opening Telegram sharing...');
  window.open("https://t.me/share/url?url=" + window.location.href);
}

// VK (Vkontakte)
function shareVK() {
  console.log('Opening VK sharing...');
  window.open("https://vk.com/share.php?url=" + window.location.href);
}

// Odnoklassniki (OK)
function shareOK() {
  console.log('Opening OK sharing...');
  window.open("https://connect.ok.ru/offer?url=" + window.location.href);
}

// My Mail.ru (Мой Мир)
function shareMyMailRu() {
  console.log('Opening My Mail.ru sharing...');
  window.open("https://connect.mail.ru/share?url=" + window.location.href);
}

// Reddit
function shareReddit() {
  console.log('Opening Reddit sharing...');
  window.open("https://connect.mail.ru/share?url=" + window.location.href);
}

// Tumblr
function shareReddit() {
  console.log('Opening Tumblr sharing...');
  window.open("https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + window.location.href);
}

// Pinterest
function sharePinterest() {
  console.log('Opening Pinterest sharing...');
  window.open("https://pinterest.com/pin/create/link/?url=" + window.location.href);
}
// Pin create button sharing API link (Pinterest) (Another sharing link)
function sharePinterestButton() {
  console.log('Opening Pinterest sharing...');
  window.open("https://pinterest.com/pin/create/button/?url=" + window.location.href);
}

// LiveJournal
function shareLiveJournal() {
  console.log('Opening LiveJournal sharing...');
  window.open("https://www.livejournal.com/update.bml?event=" + window.location.href);
}

// Skype
function shareSkype() {
  // Note: web.skype.com sharing is empty. Error is ERR_ABORTED 404 on other objects on Skype. 
  // Report on GitHub, if error is here on you and more users.
  console.log('Opening Skype sharing...');
  window.open("https://web.skype.com/share?url=" + window.location.href);
}

// Viber
function shareViber() {
  console.log('Opening Viber sharing... (only sharing with Viber program)');
  window.open("viber://forward?text=" + window.location.href);
}

// GetPocket
function shareGetPocket() {
  console.log('Opening GetPocket sharing...');
  window.open("https://getpocket.com/edit?url=" + window.location.href);
}

// WhatsApp
function shareWhatsApp() {
  // Note: On wa.me for text needed phone number
  console.log('Opening WhatsApp sharing... (only sharing with WhatsApp program)');
  window.open("whatsapp://send/?text=" + window.location.href);
}
// Another share link
function shareWhatsAppDomainAPI() {
  console.log('Opening WhatsApp API domain sharing...');
  windows.open("https://api.whatsapp.com/send?text=" + window.location.href);
}

// Flipboard
function shareFlipboard() {
  // Note: Flipboard sharing is empty with error probably (ERR_NAME_NOT_RESOLVED).
  // Contact on GitHub if Flipboard sharing is error on the world.
  console.log('Opening Flipboard sharing...');
  window.open("https://share.flipboard.com/bookmarklet/popout?v=2&url=" + window.location.href);
}

// Linkedin
function shareLinkedin() {
  // Note: Linkedin is not available on Russian country, since it is blocked.
  console.log('Opening Linkedin sharing...');
  window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + window.location.href);
}

// End