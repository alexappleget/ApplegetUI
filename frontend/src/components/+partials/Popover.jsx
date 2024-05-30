export default function Popover({code, element}) {
    const copy = () => navigator.clipboard.writeText(code);

    return (
        <pre popover="manual" id={element} className="bg-gray-800 rounded-xl align-left text-slate-50 w-full max-w-3xl p-6 center m-auto absolute">
            <div className="grid grid-cols-3 auto-rows-auto items-center">
                <p>Use class name <span className="font-bold underline">{`button-${element}`}</span></p>
                <button type="button" className="ml-auto col-span-2" popovertarget={element} popovertargetaction="hide">
                    <span aria-hidden="true">🅧</span>
                    <span className="sr-only">Close</span>
                </button>
                <button type="button" onClick={copy} className="rounded-xl border-solid border-2 py-2 px-5 mt-6 col-start-2">Copy Styles</button>
            </div>
            <code>{code}</code>
        </pre>
    )
}