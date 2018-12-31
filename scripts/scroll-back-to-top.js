/**
 * @package     scroll-back-to-top
 * @author      Emre Can ÖZTAŞ (ecoz) <oztasemrecan@gmail.com>
 * @copyright   Copyright (c) 2018, Emre Can ÖZTAŞ. (https://emrecanoztas.com/)
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://github.com/oztasemrecan/scroll-back-to-top
 * @since       Version 1.0.0
 */

var triggerPosition = 50;
var backToTopButton = document.querySelector('.back-to-top-button');

window.addEventListener('scroll', function() {
    if (window.scrollY > triggerPosition) {
        backToTopButton.style.display = 'block';
        backToTopButton.addEventListener('click', function() {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });
        });
    } else {
        backToTopButton.style.display = 'none';
    }
});
