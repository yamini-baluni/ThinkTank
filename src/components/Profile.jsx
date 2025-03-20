import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    education: '',
    location: '',
    linkedin: '',
    bio: '',
    skills: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f3eee5] via-[#e2dac9] to-[#f0ebdf] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#251c1a] mb-4">Create Your Professional Profile</h1>
          <p className="text-[#251c1a]/70">Complete your profile to connect with professionals and unlock opportunities</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
              />
            </div>

            {/* Profession */}
            <div className="relative">
              <FaBriefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Current Profession"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
                required
              />
            </div>

            {/* Education */}
            <div className="relative">
              <FaGraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Education"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
                required
              />
            </div>

            {/* Location */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
                required
              />
            </div>

            {/* LinkedIn */}
            <div className="relative">
              <FaLinkedin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#251c1a]/40" />
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Profile URL"
                className="w-full pl-12 pr-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Professional Bio"
              rows="4"
              className="w-full px-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
              required
            />
          </div>

          {/* Skills */}
          <div className="mt-6">
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills (comma-separated)"
              rows="2"
              className="w-full px-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
              required
            />
          </div>

          {/* Experience */}
          <div className="mt-6">
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Work Experience"
              rows="4"
              className="w-full px-4 py-3 border border-[#251c1a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#251c1a]/30"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-8 bg-[#251c1a] text-[#f3eee5] py-4 rounded-lg font-semibold hover:bg-[#251c1a]/90 transition-colors duration-300"
          >
            Create Profile
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Profile; 