import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles(() => ({
  selectField: {
    minWidth: 140,
  },
  Paper: {
    padding: "20px",
  },
  Section: {
    margin: "20px 0",
  },
  AllFields: {
    margin: "10px",
  },
}));

export default function Query() {
  const classes = useStyles();
  let [value, setValue] = useState("12");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function resetForm() {
    setValue("");
  }
  function renderMenuItems() {
    let output = [];
    for (let i = 1; i <= 20; i++) {
      output.push(<MenuItem value={i}>{i}</MenuItem>);
    }
    return output;
  }

  const [afterDate, setAfterDate] = useState(
    new Date("December 17, 1995 03:24:00")
  );
  const [beforeDate, setBeforeDate] = useState(new Date());

  const handleAfterDateChange = (date) => {
    setAfterDate(date);
  };

  const handleBeforeDateChange = (date) => {
    setBeforeDate(date);
  };

  return (
    <Container>
      <Paper className={classes.Paper}>
        <form action="api/getAndAssessMessages">
          <Typography variant="h5">
            Filter the type of emails you want to rate
          </Typography>

          <div className={classes.Section}>
            <Typography variant="body1">
              How many emails do you want to rate?
            </Typography>
            <FormControl
              variant="outlined"
              className={`${classes.selectField} ${classes.AllFields}`}
            >
              <InputLabel>Max Results</InputLabel>

              <Select label="Max Results" name="maxResults" defaultValue="10">
                {renderMenuItems()}
              </Select>
            </FormControl>
          </div>

          <div className={classes.Section}>
            <Typography variant="body1">
              Do you want to rate emails from a particular sender or to a
              particular recipient?
            </Typography>
            <TextField
              label="Sender"
              variant="outlined"
              name="from"
              className={classes.AllFields}
            />
            <TextField
              label="Recipient"
              variant="outlined"
              name="to"
              className={classes.AllFields}
            />
          </div>

          <div className={classes.Section}>
            <Typography variant="body1">
              What time period do you want to select from?
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="After"
                value={afterDate}
                onChange={setAfterDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                name="after"
                className={classes.AllFields}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="Before"
                value={beforeDate}
                onChange={setBeforeDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                name="before"
                className={classes.AllFields}
              />
            </MuiPickersUtilsProvider>
          </div>

          <Grid container spacing={3}>
            <Grid item>
              <Button type="submit" color="primary" variant="contained">
                Rate Your Emails!
              </Button>
            </Grid>

            <Grid item>
              <Typography variant="body2" style={{ display: "inline" }}>
                (Email processing may take up to 30 seconds)
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
