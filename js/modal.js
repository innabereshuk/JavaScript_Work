(function(){
    'use strict';

    class Modal {

        width = 300
        content = 'Empty content'

        constructor(options = {}){
            this.content = ('content' in options) ?
                                   options.content :
                                   this.content;

             this.width = ('width' in options)  ?
                                   options.width :
                                   this.width; 
         
            let now = new Date();
            this.id = 'modal-' + now.getMilliseconds();
            
            this.html = `
                <div class="modal" id="${this.id}" style="width:${this.width}px;">
                    <div class="modal__content">
                         ${this.content}
                         <div class="modal__footer">
                             <button data-modal="close">Close Modal</botton>
                         </div>
                     </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend',this.html);

            document.getElementById(this.id)
                    .querySelector('[data-modal="close"]')
                    .addEventListener('click', (e) => {
                        this.close();
                    })
        }

        open (){
            document.getElementById(this.id)
                .classList.add('opened')
            
        }
        close (){
            document.getElementById(this.id)
                .classList.remove('opened')
        }
    };

    let btns = document.querySelectorAll('[data-modal]');
    let myModal = null;

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let _this = e.target;
            if (_this.getAttribute('data-modal') == 'close') {
                
                if (myModal) {
                    myModal.close();
                }
            } else {
                if (!myModal) {
                    myModal = new Modal({
                        content: "Heloooooo!",
                        width: 200
                    });
                } 
                myModal.open();
            }
        })
    });


})();