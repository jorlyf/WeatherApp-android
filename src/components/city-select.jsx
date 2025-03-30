import { Modal, Select, Spin } from "antd";
import React from "react";
import { getCities } from "../api";
import LocationSvg from "../assets/location.svg?react";
import "./city-select.css";

const CitySelect = ({
  selectedCityName,
  setSelectedCityName,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [cities, setCities] = React.useState({
    state: "initial",
    values: {},
  });

  const selectOptions = React.useMemo(() => {
    return Object.keys(cities.values).map((city) => ({
      value: city,
      label: cities.values[city],
    }));
  }, [cities]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  React.useEffect(() => {
    if (cities.state !== "initial") return;

    getCities()
      .then((x) => setCities({ state: "fulfilled", values: x }));
  }, []);

  return (
    <div className="city-select">
      <LocationSvg width="24px" height="24px" stroke="#3a3e5a" />

      {selectedCityName == null
        ? <span onClick={handleOpenModal}>Выберите город</span>
        : (
          <span onClick={handleOpenModal}>
            {cities.state !== "fulfilled"
              ? <Spin />
              : cities.values[selectedCityName]}
          </span>
        )}

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        styles={{
          body: {
            height: "70vh",
          },
        }}
        footer={null}
        title="Выбор города"
      >
        {cities.state &&
          (
            <Select
              options={selectOptions}
              value={selectedCityName}
              onClear={() => setSelectedCityName(null)}
              onSelect={(city) => setSelectedCityName(city)}
              loading={cities.state !== "fulfilled"}
              allowClear
              showSearch
              optionFilterProp="label"
              filterSort={(a, b) =>
                (a?.label ?? "").toLowerCase().localeCompare(
                  (b?.label ?? "").toLowerCase(),
                )}
              size="large"
              style={{
                width: "100%",
              }}
            />
          )}
      </Modal>
    </div>
  );
};

export default CitySelect;
