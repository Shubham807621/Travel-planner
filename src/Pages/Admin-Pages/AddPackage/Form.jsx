import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="container">
      <div className="main-section">
        <div className="title-section">
          <label className="label">Title</label>
          <input type="text" className="input-field" />
        </div>
        <div className="description-section">
          <label className="label">Description</label>
          <textarea className="textarea-field"></textarea>
        </div>
        <div className="date-places-section">
          <label className="label">Date & Places</label>
          <div className="section-box">
            <div className="date-places-grid">
              <div>
                <label className="sub-label">Group size</label>
                <div className="input-with-label">
                  <input type="text" className="input-field small-input" placeholder="No. of Pax" />
                </div>
              </div>
              <div>
                <label className="sub-label">Trip duration</label>
                <div className="input-with-label">
                  <div className="countdown-group">
                    <div className="countdown-wrapper">
                      <input type="text" className="input-field small-input countdown-input" placeholder="Nights" />
                      <div className="countdown-buttons">
                        <button className="countdown-button">↑</button>
                        <button className="countdown-button">↓</button>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-group">
                    <div className="countdown-wrapper">
                      <input type="text" className="input-field small-input countdown-input" placeholder="Days" />
                      <div className="countdown-buttons">
                        <button className="countdown-button">↑</button>
                        <button className="countdown-button">↓</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="sub-label">Category</label>
                <select className="input-field small-input">
                  <option>Adult</option>
                  <option>Children</option>
                  <option>Couple</option>
                </select>
              </div>
              <div>
                <label className="sub-label">Sale price</label>
                <input type="text" className="input-field small-input" />
              </div>
              <div>
                <label className="sub-label">Regular price</label>
                <input type="text" className="input-field small-input" />
              </div>
              <div>
                <label className="sub-label">Discount</label>
                <input type="text" className="input-field small-input" />
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-section">
          <label className="label">Gallery</label>
          <div className="section-box">
            <div className="gallery-upload">
              <p>Drop files to upload</p>
              <p>or</p>
              <button className="upload-button">Upload a image</button>
            </div>
          </div>
        </div>
        <div className="location-section">
          <label className="label">Location</label>
          <div className="section-box">
            <div className="location-input">
              <select className="input-field">
                <option>Select a map</option>
                <option>Google Map</option>
              </select>
              <input type="text" className="input-field" placeholder="API key" />
            </div>
            <div className="map-placeholder">
              <p>[Map Placeholder - Google Map would render here if selected]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="publish-section">
          <label className="label">Publish</label>
          <div className="publish-buttons">
            <button className="save-draft-button">Save draft</button>
            <button className="preview-button">Preview</button>
          </div>
          <div className="status-visibility">
            <p><strong>Status:</strong> Draft <a href="#" className="edit-link">Edit</a></p>
            <p><strong>Visibility:</strong> Public <a href="#" className="edit-link">Edit</a></p>
          </div>
          <button className="publish-button">Publish</button>
        </div>
        <div className="keywords-section">
          <label className="label">Popular</label>
          <div className="checkbox-group">
            <input type="checkbox" id="popular" />
            <label htmlFor="popular">Use popular</label>
          </div>
          <label className="label">Keywords</label>
          <input type="text" className="input-field" placeholder="Keywords" />
          <label className="label">Category</label>
          <div className="checkbox-group">
            <input type="checkbox" id="hotel" />
            <label htmlFor="hotel">Hotel</label>
            <input type="checkbox" id="walking" />
            <label htmlFor="walking">Walking</label>
          </div>
          <button className="add-image-button">Add image</button>
        </div>
      </div>
    </div>
  );
};

export default Form;