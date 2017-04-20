import page from 'page';
// import empty from 'empty-element';
import template from './template';

page('/signup', (ctx, next) => {
    // var main = document.getElementById('main-container');
    // empty(main).appendChild(template);

    $('title').html('Plaztigram - Signup');
    var main = $('#main-container');
    main.empty().append(template);
});