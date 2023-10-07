import { useBuildingsQuery } from "@/redux/api/buildingApi";
import FormSelectField, { SelectOption } from "./FormSelectField";

const BuildingField = () => {
  const { data, isLoading } = useBuildingsQuery({
    limit: 100,
    page: 1,
  });
  const buildings = data?.buildings;
  const buildingsOptions = buildings?.map((building) => {
    return {
      label: building?.title,
      value: building?.id,
    };
  });

  return (
    <FormSelectField
      name="building"
      label="building"
      options={buildingsOptions as SelectOption[]}
    />
  );
};

export default BuildingField;
