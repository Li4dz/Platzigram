import page from 'page';
import template from './template';

page('/', (ctx, next) => {
    $('title').html('Plaztigram');
    var main = $('#main-container');
    main.empty().append(template);
});