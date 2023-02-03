import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { MdPersonOutline } from "react-icons/md";

const API_URL =
  "https://api.sindibad.iq/api/v1.0/shera/airport/elastic-autocomplete";

export default function test() {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [FlightType, setFlightType] = useState("no-return");
  const [FlightClass, setFlightClass] = useState("economy");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}?query=${searchTerm}`);
      const data = await response.json();
      if (data.success) {
        setAirports(data.result.items);
      }
      setLoading(false);
    };

    if (searchTerm) {
      fetchData();
    } else {
      setAirports([]);
    }
  }, [searchTerm]);

  return (
    <div className="md:max-w-3xl max-w-xl transition-all mx-auto">
      <div className="bg-blue-600 h-[13em] rounded-b-2xl"></div>

      <div className="relative bg-white shadow-xl p-2 rounded-xl mx-3 -top-10">
        <div className="p-2 mb-2 sm:text-xl capitalize font-bold text-blue-600">
          Where would you want to fly?
        </div>

        <div className="flex gap-2">
          <FormControl className="flex-1">
            <InputLabel id="demo-simple-select-label" className="bg-white">
              Flight Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={FlightType}
              label="Age"
              onChange={(e) => setFlightType(e.target.value)}
            >
              <MenuItem value={"return"}>one way flight</MenuItem>
              <MenuItem value={"no-return"}>return</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="flex-1">
            <InputLabel id="demo-simple-select-label" className="bg-white">
              Cabine
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={FlightClass}
              label="flight class"
              onChange={(e) => setFlightClass(e.target.value)}
            >
              <MenuItem value={"economy"}>Economy</MenuItem>
              <MenuItem value={"bussiness"}>Bussiness</MenuItem>
            </Select>
          </FormControl>

          <Button
            sx={{
              borderColor: "black",
              color: "black",
            }}
            variant="outlined"
            color="primary"
            startIcon={<MdPersonOutline />}
          >
            Passengers
          </Button>
        </div>

        <div className="flex gap-3 mt-3 sm:flex-row flex-col">
          <Autocomplete
            className="w-full"
            id="country-select-demo"
            sx={{ width: 300 }}
            options={airports}
            autoHighlight
            getOptionLabel={(option) => `${option.name} (${option.code})`}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.name} ({option.iataCode})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            )}
          />
          <Autocomplete
            className="w-full"
            id="country-select-demo"
            sx={{ width: 300 }}
            options={airports}
            autoHighlight
            getOptionLabel={(option) => `${option.name} (${option.code})`}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.name} ({option.iataCode})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            )}
          />
        </div>

        <div className="flex mt-5">
          <TextField
            type="date"
            label="Date"
            InputLabelProps={{
              shrink: true,
            }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
