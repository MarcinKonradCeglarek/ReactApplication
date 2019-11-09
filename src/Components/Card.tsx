import React from "react";

const styles = (theme: Theme) => createStyles({});

export interface Props extends WithStyles<typeof styles, true> {}

class Card extends React.PureComponent<Props> {}

export default withStyles(styles, { withTheme: true })(Card);
