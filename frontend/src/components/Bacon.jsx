import { Fragment } from 'react';

export default function Bacon() {
    const styles = `
    .button-lightningbolt {
        --s: .25em; /* control the wave*/

        padding: .4em .5em;
        background-color: #BF4D28;
        color: #fff;
        --_s: calc(var(--s)*4) 51% repeat-x;
        --_r: calc(1.345*var(--s)) at left 50%;
        --_g1: #000 99%,#0000 101%;
        --_g2: #0000 99%,#000 101%;
        --mask:
          radial-gradient(var(--_r) top    calc(var(--s)* 1.9),var(--_g1)) 
           calc(50% - 2*var(--s) - var(--_i,0px)) 0/var(--_s),
          radial-gradient(var(--_r) top    calc(var(--s)*-0.9),var(--_g2)) 
           calc(50% - var(--_i,0px)) var(--s)/var(--_s),
          radial-gradient(var(--_r) bottom calc(var(--s)* 1.9),var(--_g1)) 
           calc(50% - 2*var(--s) + var(--_i,0px)) 100%/var(--_s),
          radial-gradient(var(--_r) bottom calc(var(--s)*-0.9),var(--_g2)) 
           calc(50% + var(--_i,0px)) calc(100% - var(--s))/var(--_s);
        -webkit-mask: var(--mask);
                mask: var(--mask);
        clip-path: polygon(
          calc(2*var(--s) - var(--_i,0px)) 0,
          calc(100%       - var(--_i,0px)) 0, 
          calc(100% - var(--s)) 50%,
          calc(100% - 2*var(--s) + var(--_i,0px)) 100%,
          calc(0%                + var(--_i,0px)) 100%, 
          var(--s) 50%);
        cursor: pointer;
        transition: .35s;
        &:hover {
            --_i: calc(2*var(--s));
        }
        &:active {
            background-image: linear-gradient(#0004 0 0);
        }
        &:focus-visible {
            -webkit-mask: none;
            clip-path: none;
            outline-offset: .1em;
            padding-block: .2em;
            margin-block: .2em;
            transition: 0s;
        }
    }
    `;

    const copy = () => navigator.clipboard.writeText(styles);

    return (
        <Fragment>
            <button type="button" className="button button-lightningbolt" popovertarget="bacon">
                Button
            </button>
            <pre popover="manual" id="bacon" className="bg-gray-800 rounded-xl align-left text-slate-50 w-full max-w-3xl p-4 center m-auto absolute">
                    <button type="button" className="block ml-auto" popovertarget="bacon" popovertargetaction="hide">
                        <span aria-hidden="true">🅧</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <button type="button" onClick={copy} className="rounded-xl mx-auto border-solid border-2 py-2 px-5 block">Copy Styles</button>
                    <code>{styles}</code>
                </pre>
            <style>{styles}</style>
        </Fragment>
    )
}