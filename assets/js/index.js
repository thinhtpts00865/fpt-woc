$(document).ready(() => {
    const $header = $('#header');
    const $hasSubMenu = $('.has-sub-menu');
    let isHeaderClicked = false;
    let timeoutId;

    $(document).on('mousemove', (event) => {
        if (event.clientY < 80) {
            $header.addClass('show');
            clearTimeout(timeoutId);
        } else if (!isHeaderClicked) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                $header.removeClass('show');
            }, 350);
        }
    });

    $header.on('click', () => {
        isHeaderClicked = true;
        clearTimeout(timeoutId);
    });

    $(document).on('click', (event) => {
        if (!$header.is(event.target) && $header.has(event.target).length === 0) {
            isHeaderClicked = false;
            $header.removeClass('show');
        }
    });

    $hasSubMenu.on('mouseover', () => {
        isHeaderClicked = true;
    });

    $hasSubMenu.on('mouseleave', () => {
        isHeaderClicked = false;
    });
});