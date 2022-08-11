import {
  FiAtSign,
  FiPhone,
  FiMail,
  FiGlobe,
  FiBriefcase,
  FiMapPin,
} from 'react-icons/fi';

export default function ListView({ data }) {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white shadow-md hover:shadow-lg rounded-xl">
      <div className="flex flex-col items-center mb-2">
        <span className="text-lg font-medium">{data.name}</span>
        <div className="flex items-center gap-1">
          <FiAtSign size={14} color="#6B7280" />
          <span className="text-gray-500 text-sm">{data.username}</span>
        </div>
        <div className="h-1 w-5 rounded bg-blue-500 mt-2"></div>
      </div>
      <div className="flex flex-col items-start justify-between text-sm gap-2">
        <div className="flex items-center gap-2">
          <FiMail size={18} color="#374151" />
          <span className="text-gray-700">{data.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiPhone size={18} color="#374151" />
          <span className="text-gray-700">{data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiGlobe size={18} color="#374151" />
          <span className="text-gray-700">{data.website}</span>
        </div>

        {/* address */}
        <div className="flex items-start gap-2 w-full">
          <FiMapPin size={18} color="#374151" />
          <div className="flex flex-col flex-1 gap-1">
            <div className="flex gap-2">
              <div className="flex gap-1 flex-1">
                <span>Street :</span>
                <span className="text-gray-700">{data.address.street}</span>
              </div>
              <div className="flex gap-1 flex-1">
                <span>Suite :</span>
                <span className="text-gray-700">{data.address.suite}</span>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <div className="flex gap-1 flex-1">
                <span>City :</span>
                <span className="text-gray-700">{data.address.city}</span>
              </div>
              <div className="flex gap-1 flex-1">
                <span>Zipcode :</span>
                <span className="text-gray-700">{data.address.zipcode}</span>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <div className="flex gap-1 flex-1">
                <span>Latitude :</span>
                <span className="text-gray-700">{data.address.geo.lat}</span>
              </div>
              <div className="flex gap-1 flex-1">
                <span>Longitude :</span>
                <span className="text-gray-700">{data.address.geo.lng}</span>
              </div>
            </div>
          </div>
        </div>

        {/* company */}
        <div className="flex items-start gap-2">
          <FiBriefcase size={18} color="#374151" />
          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <span>Name : </span>
              <span className="text-gray-700">{data.company.name}</span>
            </div>
            <div className="flex flex-col">
              <span>Catch Phrase : </span>
              <span className="text-gray-700">{data.company.catchPhrase}</span>
            </div>
            <div className="flex flex-col">
              <span>Bussiness : </span>
              <span className="text-gray-700">{data.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
