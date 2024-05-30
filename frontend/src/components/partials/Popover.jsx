export default function Popover({code, target}) {

    const copy = () => navigator.clipboard.writeText(code);

    return (
        <pre popover="manual" id={target} className="bg-gray-800 rounded-xl align-left text-slate-50 w-full max-w-3xl p-4 center m-auto absolute">
        <button type="button" className="block ml-auto" popovertarget={target} popovertargetaction="hide">
            <span aria-hidden="true">🅧</span>
            <span className="sr-only">Close</span>
        </button>
        <button type="button" onClick={copy} className="rounded-xl mx-auto border-solid border-2 py-2 px-5 block">Copy Styles</button>
        <code>{code}</code>
    </pre>
    )
}