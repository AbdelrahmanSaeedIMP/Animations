import { animate, state, style, transition, trigger } from "@angular/animations";

export let spin = trigger('spin', [
    state('*', style({
        transform: 'rotate(0) translate({{translateValue}})'
    }), { params: { translateValue: '80px' } }),
    state('spinning', style({
        transform: 'rotate(360deg) translate({{translateValue}})'
    }), { params: { translateValue: '80px' } }),
    transition('* => spinning', animate('{{duration}}'), { params: { duration: '3s' } })
])

export let fade = trigger('fadeIn', [
    transition('void => *', [
        style({
            opacity: 0
        }),
        animate(800)
    ]),
    transition('* => void', [
        animate(400, style({ opacity: 0 }))
    ])
])