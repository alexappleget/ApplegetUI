import { Fragment } from 'react';
import Popover from 'components/partials/Popover';
import { styles } from 'components/Bacon/styles';

export default function Bacon() {
    const target ="bacon";

    return (
        <Fragment>
            <button type="button" className="button button-bacon" popovertarget={target}>
                Button
            </button>
            <Popover code={styles()} element={target} />
            <style>{styles()}</style>
        </Fragment>
    )
}